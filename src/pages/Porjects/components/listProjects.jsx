import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DialogProject from './Dialog'
import { Button } from "@mui/material";
import { Project } from "./Project";
import { NavLink } from "react-router-dom";
import Header from "./header";
import { Grid } from "@mui/material";
import axios from "axios";
import { useProjectsContext } from '../../../context/useProjectContext'
import { useUsersContext } from '../../../context/useUsersContext'
import { api, token, headers, UrlDataBoard } from "../../../api/posts";


export default function ListProject() {
    const { projects, dispatchProjects } = useProjectsContext();
    const { dispatchUsers } = useUsersContext();

    const [projectsList, setProjectsList] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    useEffect(() => {
        fetchProjects();
        fetchUsers();
    }, [])

    const fetchProjects = () => {
        axios.get(UrlDataBoard)
            .then(response => {
                setProjectsList(response.data)
                dispatchProjects({type: 'SET_PROJECTS', payload: response.data})

            })
            .catch(error => {
                console.error('Error fetching JSON file:', error);
            })
    };
    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${api}/users/all`,  headers )
            dispatchUsers({type: 'SET_USERS', payload: response.data.result})
        } catch (error) {
            console.error('Error fetching JSON file:', error);
        }
    }

    const handleDeleteItem = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this project?');
        
        if (confirmDelete) {
            axios.delete(`${api}/board/${id}/delete`)
            .then((response) => {
                window.alert('Project deleted successfully.')
                dispatchProjects({type: 'DELETE_PROJECT', payload: response.data})
            })
            .catch(error => {
                console.error('Error fetching JSON file:', error);
                window.alert('Error deleting project. Please try again.')
            })
        }
        
    }

    const handleEditItem = (project) => {
        setEditingProject(project);
        setEditDialogOpen(true);
    }

    const handleSaveEdit = (project) => {
        axios.patch(
            `${api}/board/${project._id}/update`,
            {
                name: project.name,
                description: project.description
            },
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json; charset=utf-8',
                },
            }
        )
        .then(response => {
            setEditDialogOpen(false);
            dispatchProjects({type: 'UPDATE_PROJECT', payload: response.data})

        })
        .catch(error => {
            console.error('Error editing project:', error);
        });
    }

    const handleCloseEditDialog = () => {
        setEditingProject(null);
        setEditDialogOpen(false);
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Header title="Projects" />
            <NavLink to={"/Projects/creatProject"}>
                <Button sx={{ color: "#F6C927" }}>
                    <AddIcon />
                </Button>
            </NavLink>
            {projects.slice().reverse().map((item, index) => (
                <Project
                    NavLink={`/Projects/todo-board/${item._id}`}
                    key={item._id}
                    id={item._id}
                    title={item.name}
                    description={item.description}
                    time={new Date(item.creationDate).toLocaleString()}
                    deleteItem={handleDeleteItem}
                    editItem={() => handleEditItem(item)}
                />
            ))}
            <DialogProject
                editDialogOpen={editDialogOpen}
                handleCloseEditDialog={handleCloseEditDialog}
                editingProject={editingProject}
                setEditingProject={setEditingProject}
                handleSaveEdit={handleSaveEdit}

            />
        </Grid>
    );
}
