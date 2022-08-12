import LinearStepper from './LinearStepper';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';
import './styles.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3} margin="auto" border="none" boxShadow="none" >
          <LinearStepper/>
        </Paper>
      </Container>
    </>
  )
}

export default App
