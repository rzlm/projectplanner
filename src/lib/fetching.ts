"use server";
import { createClient } from "../../utils/supabase/server";
import { PrismaClient } from "@prisma/client";

//create a new project
const prisma = new PrismaClient();

export async function createProject(data: {name: string; description?: string;}) {
  const supabase = await createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  
  // Check if user is authenticated
  if (userError || !userData?.user) {
    throw new Error("User not authenticated");
  }
//Get uuid from table
const appUser = await prisma.user.findUnique({
    where: {
      authId: userData.user.id,
    },
  });

  // Check if user exists in the table

  if (!appUser) {
    throw new Error("User not found in database");
  }

  // Create a new project in the database
  console.log("Creating project with data:", data);
  console.log("Author ID:", appUser.authId);

  const project = await prisma.project.create({
    data: {
      name: data.name,
      description: data.description ? data.description : "",
      authorId: appUser.id,
    },
  });
  return project;
}



//fetch projects from the database

const fetchProjectsbyUserId = async( userId:string ) => {
  const projects = await prisma.project.findMany({
    where: {
      authorId: userId,
    },
  });
  return projects;
};

export { fetchProjectsbyUserId };

// export async function fetchProjectById(id: string) {
//   const project = await prisma.project.findUnique({
//     where: {
//       id: id,
//     },
//   });
//   return project;
// };

export async function getProjectById(id: string) {
  const project = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });
  return project;
}

//add new member to project


//get userid using supabase auth id
export async function getUserId(id:string) {
  const user = await prisma.user.findUnique({
    where: {
      authId: id,
    },
  });
  return user;
}

//create a new board
export async function createBoard(name: string, projectId: string, description?: string) {
  const board = await prisma.board.create({
    data: {
      name,
      projectId,
      description: description ? description : "",
    },
  });
  return board;
}

//fetch boards by project id
export async function getBoardByProjectId(projectId: string) {
  const boards = await prisma.board.findMany({
    where: {
      projectId: projectId,
    },
  });
  return boards;
}
 //fetch board by id

export async function getBoardById(id: string) {
  const board = await prisma.board.findUnique({
    where: {
      id: id,
    },
  });
  return board;
}

