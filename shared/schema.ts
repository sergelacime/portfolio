import { pgTable, text, serial, integer, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  imageUrl: text("image_url").notNull(),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  description: text("description").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  technologies: text("technologies").array().notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertExperienceSchema = createInsertSchema(experiences);
export const insertMessageSchema = createInsertSchema(messages).omit({ createdAt: true });

export type Project = typeof projects.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
