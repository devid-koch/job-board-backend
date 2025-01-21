import { Request, Response } from "express";
import Job from "../models/Job";

export const createJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ message: "Job created successfully!", data: job });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getJobs = async (_: Request, res: Response) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json({ data: jobs });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getJobById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      res.status(404).json({ error: "Job not found" });
      return;
    }
    res.status(200).json({ data: job });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      res.status(404).json({ error: "Job not found" });
      return;
    }
    await job.update(req.body);
    res.status(200).json({ data: job });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      res.status(404).json({ error: "Job not found" });
      return;
    }
    await job.destroy();
    res.status(200).json({ message: "Job deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
