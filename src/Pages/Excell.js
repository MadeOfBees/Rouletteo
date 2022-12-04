import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { read, utils } from "xlsx";
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Rouletteo() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [output, setOutput] = React.useState();
    const [input, setInput] = React.useState();

    const importFiles = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = utils.sheet_to_json(worksheet);
                setInput(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    function pickRand() {
        let list = input ;
        var rand = JSON.stringify(list[Math.floor(Math.random() * list.length)]);
        console.log(rand);
        setOpen(true);
        setOutput(rand);
    }


    return (
        <div>
            <h1>Make a list here:</h1>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} className="NoDoubtPut">
                    <Item className="screenText">
                        <Input className='fileInput' type="file" id="file" accept=".xlsx, " onChange={importFiles} />
                        <Item><Button onClick={pickRand}>Pick a random list entry</Button></Item>
                    </Item>
                </Stack>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            We have chosen:
                        </Typography>
                        <Typography id="modal-modal-description" className='Wrap'>
                            {output}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default Rouletteo;