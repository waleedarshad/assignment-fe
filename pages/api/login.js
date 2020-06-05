// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'



// import { useCallback, useEffect } from 'react'


export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    
    // const resp = await fetch('http://localhost:5000/api/login')
    // const json = await resp.json();
    // res.end(json);

     res.end(JSON.stringify({ name: 'John Doe' }))
    //  res.render('/')
  }

// export default (req, res) => {
//     const router = useRouter()
//     if (req.method === 'POST') {
//       // Process a POST request
//     //   Router.push('/posts/first-post')
//     // Router.push('/')
//     res.redirect('/')

//     //   res.status(200).json({ text: 'Hello working' })
//     } else {
//         Router.push('/')
//         res.status(200).json({ text: 'Hello working' })
//       // Handle any other HTTP method
//     }
//   }