import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Rouletteo() {
    function pickRand() {
        var list = document.getElementById("outlined-multiline-static").value.split("\n");
        alert(list[Math.floor(Math.random() * list.length)])
    }
    return (
        <div>
            <h1>Make a list here:</h1>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} className="NoDoubtPut">
                    <Item className="screenText"><TextField id="outlined-multiline-static" label="Input" multiline rows={10} defaultValue="" placeholder="Put your list here"></TextField></Item>
                    <Item><Button onClick={pickRand}>Pick a random list entry</Button></Item>
                </Stack>
            </Box>
        </div>
    );
}

export default Rouletteo;