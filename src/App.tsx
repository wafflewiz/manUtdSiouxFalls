import './App.css'
import logo from './assets/images/logo.png';
import fbLogo from  './assets/images/fbLogo.png';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


function App() {

  return (
    
    <div className="bg-red-500 text-white min-h-screen p-2 md:p-4 lg:p-8 min-w-fullw-full">
      <title>
        MUFC Sioux Falls
      </title>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-yellow-300">
      Welcome to the Sioux Falls Red Army Page!
    </h1>
    <div className="flex justify-center my-6">
        <img src={logo} alt="Manchester United Logo" className=" h-16" />
    </div>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      One place to stay connected with fellow Manchester United supporters! Check out the <b>Match Table</b> for information regarding upcoming matches and meetup locations here, as well as social media links to stay up to date on community events and more!
    </p>
    <div className="flex justify-center my-6">
        <img src={logo} alt="Manchester United Logo" className=" h-16" />
    </div>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-yellow-300">
     <u>Match Table</u>
    </h3>
    <Table>
      <TableCaption className="text-white" >Event locations will be updated as they are confirmed. Check our Facebook Group below for more information!</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[500px] text-white min-h-screen p-4 font-bold text-lg">Match Details</TableHead>
          <TableHead className="w-[500px] text-white min-h-screen p-4 font-bold text-lg">Meetup Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium text-left" >Manchester United vs. Liverpool</TableCell>
          <TableCell className="font-medium text-left">Some Bar!</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <a href="https://www.facebook.com/share/xHG5h627BNVtToMW/" target="_blank" rel="noopener noreferrer" className="flex items-center my-6">
      <img src={fbLogo} alt="Facebook Logo" className="mr-2" />
      <p><u>SF Red Army Facebook Group</u></p>
    </a>


</div>

  )
}

export default App
