import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = [
    { title: 'Web Development', icon: '🌐', desc: 'Secure, high-converting platforms built using bleeding-edge SPA frameworks.' },
    { title: 'API Integration', icon: '⚡', desc: 'Microservices & robust backends scaled for millions of users worldwide.' },
    { title: 'AI Solutions', icon: '🤖', desc: 'Next-gen machine learning pipelines to automate your operations.' },
    { title: 'Cloud Infrastructure', icon: '☁️', desc: 'Reliable and cost-effective deployments on Azure and AWS.' }
  ];

  stats = [
    { value: '250+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years of Excellence' }
  ];

  projects = [
    { title: 'Volleyball of India', desc: 'A nationwide sports management suite scaling gracefully to high traffic.' },
    { title: 'SGFI Infrastructure', desc: 'Federation-wide data tracking, dramatically reducing administrative overhead.' }
  ];
}
