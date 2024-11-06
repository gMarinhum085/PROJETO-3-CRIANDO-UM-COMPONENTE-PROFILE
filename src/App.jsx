import Profile from './components/Profile'

export default function App() {
  return( 
        <div>
          <Profile 
           img={'./eu.jpg'}
           name={'Gabriel Marinho'} 
           bio={'Estudante de Desenvolvimento de Sistemas'} 
           contact={'+55 (85) 92836220'} 
           email={'gabrielmarinho1605@gmail.com'} 
           githubUrl={'https://github.com/gMarinhum085'} 
           instagramUrl={'https://instagram.com/gabriel.m7__/?next=%2F'} 
           letterboxdUrl={'https://letterboxd.com/'}
           />
        </div> 
   
  )
}
