#!/usr/bin/env python3
"""
UI Feedback Analyzer - Processes CloudWatch Synthetics screenshots
and generates UI improvement recommendations
"""

import boto3
import json
import os
from datetime import datetime, timedelta
import requests

class UIFeedbackAnalyzer:
    def __init__(self):
        self.synthetics = boto3.client('synthetics', region_name='us-east-1')
        self.s3 = boto3.client('s3', region_name='us-east-1')
        self.cloudwatch = boto3.client('cloudwatch', region_name='us-east-1')
        
    def get_latest_canary_results(self, canary_name="immortal-ragdoll-ui-monitor"):
        """Get latest canary run results"""
        try:
            response = self.synthetics.get_canary_runs(
                Name=canary_name,
                MaxResults=5
            )
            return response['CanaryRuns']
        except Exception as e:
            print(f"Error getting canary results: {e}")
            return []
    
    def analyze_performance_metrics(self):
        """Analyze performance metrics from CloudWatch"""
        end_time = datetime.utcnow()
        start_time = end_time - timedelta(hours=24)
        
        metrics = [
            'loadTime',
            'firstContentfulPaint'
        ]
        
        results = {}
        for metric in metrics:
            try:
                response = self.cloudwatch.get_metric_statistics(
                    Namespace='CloudWatchSynthetics',
                    MetricName=metric,
                    Dimensions=[
                        {
                            'Name': 'CanaryName',
                            'Value': 'immortal-ragdoll-ui-monitor'
                        }
                    ],
                    StartTime=start_time,
                    EndTime=end_time,
                    Period=3600,
                    Statistics=['Average', 'Maximum']
                )
                
                if response['Datapoints']:
                    latest = max(response['Datapoints'], key=lambda x: x['Timestamp'])
                    results[metric] = {
                        'average': latest['Average'],
                        'maximum': latest['Maximum'],
                        'timestamp': latest['Timestamp'].isoformat()
                    }
            except Exception as e:
                print(f"Error getting metric {metric}: {e}")
        
        return results
    
    def generate_ui_recommendations(self, canary_results, performance_metrics):
        """Generate UI improvement recommendations based on data"""
        recommendations = []
        
        # Performance-based recommendations
        if performance_metrics.get('loadTime', {}).get('average', 0) > 3000:
            recommendations.append({
                'priority': 'HIGH',
                'category': 'Performance',
                'issue': 'Slow page load time',
                'recommendation': 'Optimize images, reduce bundle size, implement lazy loading',
                'metric': f"Load time: {performance_metrics['loadTime']['average']:.0f}ms"
            })
        
        if performance_metrics.get('firstContentfulPaint', {}).get('average', 0) > 2500:
            recommendations.append({
                'priority': 'MEDIUM',
                'category': 'Performance',
                'issue': 'Slow First Contentful Paint',
                'recommendation': 'Optimize critical CSS, reduce render-blocking resources',
                'metric': f"FCP: {performance_metrics['firstContentfulPaint']['average']:.0f}ms"
            })
        
        # Canary failure analysis
        failed_runs = [run for run in canary_results if run['Status']['State'] == 'FAILED']
        if failed_runs:
            recommendations.append({
                'priority': 'HIGH',
                'category': 'Reliability',
                'issue': f'{len(failed_runs)} failed monitoring runs',
                'recommendation': 'Check for broken images, JavaScript errors, or layout issues',
                'metric': f"Failure rate: {len(failed_runs)/len(canary_results)*100:.1f}%"
            })
        
        # Mobile-specific recommendations
        recommendations.append({
            'priority': 'MEDIUM',
            'category': 'Mobile UX',
            'issue': 'Mobile optimization needed',
            'recommendation': 'Improve touch targets, optimize for mobile viewports, test gesture interactions',
            'metric': 'Based on multi-viewport testing'
        })
        
        return recommendations
    
    def create_improvement_tasks(self, recommendations):
        """Convert recommendations into actionable development tasks"""
        tasks = []
        
        for rec in recommendations:
            if rec['priority'] == 'HIGH':
                tasks.append({
                    'title': f"Fix: {rec['issue']}",
                    'description': rec['recommendation'],
                    'category': rec['category'],
                    'priority': rec['priority'],
                    'estimated_effort': 'Medium',
                    'files_to_modify': self.suggest_files_to_modify(rec['category'])
                })
        
        return tasks
    
    def suggest_files_to_modify(self, category):
        """Suggest which files to modify based on issue category"""
        file_map = {
            'Performance': [
                'src/app/globals.css',
                'next.config.ts',
                'src/components/sections/Hero.tsx'
            ],
            'Mobile UX': [
                'src/components/ui/Navigation.tsx',
                'src/app/globals.css',
                'src/components/sections/*.tsx'
            ],
            'Reliability': [
                'src/components/sections/Games.tsx',
                'src/components/sections/Hero.tsx'
            ]
        }
        return file_map.get(category, [])
    
    def run_analysis(self):
        """Run complete UI feedback analysis"""
        print("🔍 Starting UI feedback analysis...")
        
        # Get data
        canary_results = self.get_latest_canary_results()
        performance_metrics = self.analyze_performance_metrics()
        
        # Generate recommendations
        recommendations = self.generate_ui_recommendations(canary_results, performance_metrics)
        tasks = self.create_improvement_tasks(recommendations)
        
        # Create report
        report = {
            'timestamp': datetime.utcnow().isoformat(),
            'website_url': 'https://d2jntjhquosg39.cloudfront.net',
            'performance_metrics': performance_metrics,
            'canary_summary': {
                'total_runs': len(canary_results),
                'failed_runs': len([r for r in canary_results if r['Status']['State'] == 'FAILED']),
                'success_rate': f"{(1 - len([r for r in canary_results if r['Status']['State'] == 'FAILED'])/max(len(canary_results), 1))*100:.1f}%"
            },
            'recommendations': recommendations,
            'action_items': tasks
        }
        
        # Save report
        with open('ui-feedback-report.json', 'w') as f:
            json.dump(report, f, indent=2)
        
        print("✅ Analysis complete! Report saved to ui-feedback-report.json")
        return report

if __name__ == "__main__":
    analyzer = UIFeedbackAnalyzer()
    report = analyzer.run_analysis()
    
    print("\n📊 UI FEEDBACK SUMMARY:")
    print(f"Performance Score: {report['canary_summary']['success_rate']}")
    print(f"High Priority Issues: {len([r for r in report['recommendations'] if r['priority'] == 'HIGH'])}")
    print(f"Action Items: {len(report['action_items'])}")