import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import logger from "@shared/Logger";

import SurveyDao from "@daos/Airtable/SurveyDao";
import StudentDao from "@daos/Airtable/StudentDao";
import { paramMissingError } from "@shared/constants";

const surveyDao = new SurveyDao();
const studentDao = new StudentDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all surveys from `Labs - TBSurveys`.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllSurveys(
  req: Request,
  res: Response
): Promise<Response> {
  const surveys = await surveyDao.getAll();

  return res.status(OK).json(surveys);
}

/**
 * Get all surveys from the given cohort view.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getCohortSurveys(
  req: Request,
  res: Response
): Promise<Response> {
  const { cohort } = req.params;
  const surveys = await surveyDao.getCohort(cohort);

  return res.status(OK).json(surveys);
}

/**
 * Get all students from `Labs - TBSurveys`.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllStudents(
  req: Request,
  res: Response
): Promise<Response> {
  const students = await studentDao.getAll();

  return res.status(OK).json(students);
}

/**
 * Get all students from the given cohort view.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getCohortStudents(
  req: Request,
  res: Response
): Promise<Response> {
  const { cohort } = req.params;
  const students = await studentDao.getCohort(cohort);

  return res.status(OK).json(students);
}

/**
 * Get one student by email
 *
 * @param req
 * @param res
 * @returns
 */
export async function getStudentByEmail(
  req: Request,
  res: Response
): Promise<Response> {
  const { email } = req.params;
  const student = await studentDao.getByEmail(email);

  return res.status(OK).json(student);
}
