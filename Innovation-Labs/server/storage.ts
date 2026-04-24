import { contactSubmissions, type InsertContactSubmission } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(submission: InsertContactSubmission): Promise<void> {
    await db.insert(contactSubmissions).values(submission);
  }
}

export const storage = new DatabaseStorage();
