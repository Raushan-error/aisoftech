import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  allServices = [
    { title: 'Web Application Development', icon: '💻', desc: 'Custom tailored, fully responsive web apps built with the latest modern frameworks.' },
    { title: 'Mobile App Development', icon: '📱', desc: 'Native and cross-platform mobile applications for iOS and Android, delivering seamless user experiences on the go.' },
    { title: 'API Development', icon: '🔌', desc: 'Robust, secure, and highly scalable RESTful and GraphQL APIs for seamless integration.' },
    { title: 'AI Solutions', icon: '🧠', desc: 'Cutting-edge artificial intelligence and machine learning solutions to automate your business.' },
    { title: 'Custom Software Development', icon: '🛠️', desc: 'End-to-end bespoke software creation customized specifically for your enterprise needs.' }
  ];
}
