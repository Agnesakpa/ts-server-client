import Greet from './components/Greet.js';
import SumForm from './components/SumForm.js';
import UserList from './components/UserList.js';
import './style.css';


const app = document.getElementById('app');

app.appendChild(Greet());
app.appendChild(SumForm());
app.appendChild(UserList());

