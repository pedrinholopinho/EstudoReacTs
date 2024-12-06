import { useState } from "react";

const Tela = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const HandleEntrar = () => {
        console.log(email)
        console.log(password)

    }
  return (
    <div>
     <form> 
        <label>
            <span>
                E-mail
            </span>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
        </label>

        <label>
            <span>
                Senha
            </span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>

        <button type="button" onClick={HandleEntrar}>
            Entrar
        </button>

     </form>
    </div>
  );
};

export default Tela;
