"use server";
import { createClient } from "../../utils/supabase/server";
import { PrismaClient, TaskStatus } from "@prisma/client";

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

//create default boards for a project (Backlog, To-do, In progress, done
export async function createDefaultLists(boardId: string) {
  const defaultLists = await prisma.list.createMany({
    data: [
      {name: "Backlog", description: "Backlog", boardId: boardId},
      {name: "To-do", description: "To-do", boardId: boardId},
      {name: "In progress", description: "Tasks that are in progress", boardId: boardId},
      {name: "Done", description: "Completed tasks.", boardId: boardId},
    ]
  });
  return defaultLists;
}

//fetch lists by board id
export async function getListsByBoardId(boardId:string){
  const lists = await prisma.list.findMany({
    where: {
      boardId:boardId,
    },
  });
  return lists;
}

//delete a list
export async function deleteList(listId:string) {
  //Delete all tasks in the list first
  const deleteTasks = await prisma.task.deleteMany({
    where: {
      listId: listId,
    }
  })
 
   
  const deleteList = await prisma.list.delete({
    where: {
      id: listId
    }
  })
  return { deleteList, deleteTasks };
}

//create a new task
export async function createTask(authorId:string, name: string, description: string, dueDate: string | null, priority: number, status: TaskStatus, assignee: string | null, listId: string, tags?: string[] ) {
  const task = await prisma.task.create({
    data: {
      authorId,
      name,
      description,
      dueDate: dueDate ? new Date(dueDate) : null,
      priority,
      status,
      tags: tags ? { connect: tags.map((id) => ({ id })) } : undefined,
      assigneId: assignee ?? undefined,
      listId,
    },
  });
  return task;
};

  //delete a task

  export async function deleteTask(taskId:string){
    const deleteTask = await prisma.task.delete({
      where: {
        id: taskId,
      }
    })
    return deleteTask;
  }

  //update a task