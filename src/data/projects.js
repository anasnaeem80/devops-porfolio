export const projectsData = [
  {
    id: 1,
    title: "Fully Automated CI/CD Pipeline for Microservices",
    description:
      "Architected end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes with automated security scanning (Trivy) and image vulnerability assessment. Implemented blue-green deployment strategy ensuring zero-downtime releases and automated rollback capabilities.",
    tags: ["Jenkins", "Docker", "Kubernetes", "Trivy", "Blue-Green Deployment"],
    impact: "80% faster deployments, 99.9% application availability",
  },
  {
    id: 2,
    title: "Kubernetes Production Cluster Setup",
    description:
      "Designed and deployed production-grade Kubernetes cluster on AWS EKS with auto-scaling, load balancing, and persistent storage. Implemented RBAC, network policies, and secrets management for enhanced security.",
    tags: [
      "AWS EKS",
      "Kubernetes",
      "RBAC",
      "Auto-scaling",
      "Secrets Management",
    ],
    impact: "Successfully migrated 10+ microservices handling 50K+ daily users",
  },
  {
    id: 3,
    title: "AWS Serverless DevOps Platform",
    description:
      "Built serverless web application using Lambda, API Gateway, DynamoDB, and S3 with infrastructure defined in Terraform. Configured CI/CD pipeline with GitHub Actions for automated testing and deployment.",
    tags: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "Terraform",
      "GitHub Actions",
    ],
    impact: "60% cost reduction compared to traditional EC2-based architecture",
  },
  {
    id: 4,
    title: "Comprehensive Monitoring Solution",
    description:
      "Implemented full-stack monitoring using Prometheus, Grafana, and ELK Stack for 15+ microservices. Created custom dashboards and alerting rules for proactive issue detection.",
    tags: ["Prometheus", "Grafana", "ELK Stack", "Monitoring", "Alerting"],
    impact: "Reduced mean time to detection (MTTD) by 70%",
  },
  {
    id: 5,
    title: "Infrastructure as Code Automation",
    description:
      "Developed modular Terraform configurations for AWS infrastructure including VPC, subnets, EC2, RDS, and EKS. Integrated Ansible for post-provisioning configuration management and application setup.",
    tags: ["Terraform", "Ansible", "AWS", "VPC", "EC2", "RDS", "EKS"],
    impact:
      "Infrastructure provisioning time reduced from 2 days to 30 minutes",
  },
  {
    id: 6,
    title: "Real-Time Resource Monitoring Tool",
    description:
      "Created Python-based system monitoring tool with real-time CPU, memory, and disk usage tracking. Containerized with Docker, deployed on Kubernetes, and visualized metrics in Grafana.",
    tags: ["Python", "Docker", "Kubernetes", "Grafana", "Monitoring"],
    impact: "Proactive alerting prevented 5+ potential production incidents",
  },
];
