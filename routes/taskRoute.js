import e from "express"
import { addTask, deleteTask, getTask, updateTask } from "../controller/taskController.js";

const Router = e.Router()

Router.route("/task").post(addTask).get(getTask)
Router.route("/task/:id").put(updateTask).delete(deleteTask)


export default Router;