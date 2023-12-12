import './App.css'
import HomeScreen from './components/HomeScreen/HomeScreen'
import { ClerkProvider, 
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  SignIn, 
} from '@clerk/clerk-react';
import Welcome from './components/Landing/Welcome';
 

function App() {
  return (
    <ClerkProvider publishableKey="pk_test_cmVndWxhci1ob3JzZS02Mi5jbGVyay5hY2NvdW50cy5kZXYk">
      <div>
        <HomeScreen/>
      </div>
      <SignedIn>
        <Welcome/>
      </SignedIn>
      <SignedOut>
        <SignIn/>
      </SignedOut>
    </ClerkProvider>
  )
}

export default App
