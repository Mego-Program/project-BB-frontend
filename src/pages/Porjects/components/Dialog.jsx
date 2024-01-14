import { Button, DialogActions, Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";

function DialogProject(props) {
    
    return (
        <Dialog open={props.editDialogOpen} onClose={props.handleCloseEditDialog}>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogContent>
                <TextField
                    label="Project Name"
                    value={props.editingProject?.name || ""}
                    onChange={(e) => props.setEditingProject(prev => ({ ...prev, name: e.target.value }))}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    value={props.editingProject?.description || ""}
                    onChange={(e) => props.setEditingProject(prev => ({ ...prev, description: e.target.value }))}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseEditDialog} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => props.handleSaveEdit(props.editingProject)} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default DialogProject;
