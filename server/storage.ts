import { 
  Project, InsertProject,
  Experience, InsertExperience,
  Message, InsertMessage
} from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Experiences
  getExperiences(): Promise<Experience[]>;
  getExperience(id: number): Promise<Experience | undefined>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private experiences: Map<number, Experience>;
  private messages: Map<number, Message>;
  private currentProjectId: number;
  private currentExperienceId: number;
  private currentMessageId: number;

  constructor() {
    this.projects = new Map();
    this.experiences = new Map();
    this.messages = new Map();
    this.currentProjectId = 1;
    this.currentExperienceId = 1;
    this.currentMessageId = 1;

    // Add some sample data
    this.initializeSampleData();
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const newProject = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values());
  }

  async getExperience(id: number): Promise<Experience | undefined> {
    return this.experiences.get(id);
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    const id = this.currentExperienceId++;
    const newExperience = { ...experience, id };
    this.experiences.set(id, newExperience);
    return newExperience;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const id = this.currentMessageId++;
    const newMessage = { 
      ...message, 
      id, 
      createdAt: new Date() 
    };
    this.messages.set(id, newMessage);
    return newMessage;
  }

  private initializeSampleData() {
    // Sample projects
    this.createProject({
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with advanced features",
      technologies: ["React", "Node.js", "PostgreSQL"],
      imageUrl: "https://placehold.co/600x400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    });

    // Sample experiences
    this.createExperience({
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      description: "Led frontend development team and implemented new features",
      startDate: "2020-01",
      endDate: "2023-12",
      technologies: ["React", "TypeScript", "Next.js"]
    });
  }
}

export const storage = new MemStorage();
