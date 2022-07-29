/*
interface IUsuario{
  id: string;
  email:string
}
interface IAdmin extends IUsuario {
  cargo: 'Gerente' | 'Coordenador' | 'Supervisor' ;
}

function redirecione (usuario: IUsuario | IAdmin) {
  if ('cargo'  in usuario) {
    // redirecionar para a área de admnistração
  }
  // redirecionar para a área de usuário
}
*/
// cabe ao dev definir qual a melhor solução.
 interface IUsuario{
   id: string;
   email:string
   cargo?: 'Normal' | 'Gerente' | 'Coordenador' | 'Supervisor' | 'Funcionário';
}

function redirecione (usuario: IUsuario ) {
  if (usuario.cargo) {
    // redirecionar (usuário cargo);
  }
  // redirecionar para a área de usuário
}