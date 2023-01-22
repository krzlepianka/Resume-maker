import { createBrowserRouter } from 'react-router-dom';
import StartPage from 'views/startPage/StartPage';
import IntroTheme from 'components/theme/IntroTheme/IntroTheme';
import FormsContainer from 'views/entranceSelection/formsContainer/FormsContainer'
import Creator from 'views/creator/Creator';
import PersonalData from 'views/creator/personalData/PersonalData';
import Education from 'views/creator/education/Education';


  const router = createBrowserRouter([
    {
        path: '/',
        element: <IntroTheme />,
        children: [
            {
                path: '/',
                element: <StartPage />
            },
            {
                path: '/intro',
                element: <FormsContainer />
            },
        ]
    },
    {
        path: '/Creator',
        element: <Creator />,
        children: [
            {
                path: '/Creator/personal-data',
                element: <PersonalData />
            },
            {
                path: '/Creator/education',
                element: <Education />
            }
        ]
    }
  ]);

  export default router;