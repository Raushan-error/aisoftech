import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { 
      title: 'Volleyball Federation of India', 
      desc: 'Platform to manage volleyball federation data and operations across India, including registrations, events, and reporting.',
      tags: ['Angular', '.NET Core', 'SQL Server'],
      logo: 'Volleyball.png'
    },
    { 
      title: 'SGFI (School Games Federation of India)', 
      desc: 'Enterprise system for managing school sports events, student data, scheduling, and mobile access for participants across India.',
      tags: ['Angular', '.NET Core', 'SQL Server'],
      logo: 'sgfi.png'
    }
  ];
}
