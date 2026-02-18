export const skillsData = {
  cloudPlatforms: [
    {
      name: "AWS",
      icon: "aws",
      items: ["EC2", "S3", "Lambda", "IAM", "VPC", "RDS", "EKS", "CloudWatch"],
    },
  ],
  containerization: [
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Amazon EKS", icon: "eks" },
    { name: "Helm Charts", icon: "helm" },
  ],
  cicd: [
    { name: "Jenkins", icon: "jenkins" },
    { name: "GitHub Actions", icon: "github" },
    { name: "GitLab CI", icon: "gitlab" },
    { name: "ArgoCD", icon: "argocd" },
  ],
  iac: [
    { name: "Terraform", icon: "terraform" },
    { name: "Ansible", icon: "ansible" },
    { name: "CloudFormation", icon: "aws" },
  ],
  monitoring: [
    { name: "Prometheus", icon: "prometheus" },
    { name: "Grafana", icon: "grafana" },
    { name: "ELK Stack", icon: "elastic" },
  ],
  programming: ["Python", "Bash", "YAML", "HCL", "Groovy"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"],
};
