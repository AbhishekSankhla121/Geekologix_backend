import ErrorHandler from "../assets/customErr.js";
import { catchAsyncError } from "../Middlewares/catchAsyncError.js"

let tasks = [];

export const addTask = catchAsyncError((req, res, next) => {
    const { title, completed } = req.body;
    console.log(title)
    if (!title) {
        return next(new ErrorHandler("Title is requires", 400));

    }
    tasks.push({ id: Date.now(), title, completed: completed || false });
    res.status(201).json({ success: true, message: "Task Created Successfully!", tasks })
});


export const getTask = catchAsyncError((req, res, next) => {
    res.status(200).json({ success: true, tasks })
});


export const updateTask = catchAsyncError((req, res, next) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return next(new ErrorHandler("Task not found", 404));
    }
    if (title !== undefined) {
        tasks[taskIndex].title = title;
    }
    if (completed !== undefined) {
        tasks[taskIndex].completed = completed;
    }

    res.status(200).json({ success: true, message: "Task updated successfully!", tasks });
});

export const deleteTask = catchAsyncError((req, res, next) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return next(new ErrorHandler("Task not found", 404));
    }

    tasks.splice(taskIndex, 1);

    res.status(200).json({ success: true, message: "Task deleted successfully!", tasks });
});