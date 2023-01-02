import "./Home.css"

function Home() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      <h2>HomePage - About Us</h2>
      <div className="containers">
      <div className="container">
        <div className="profile">
          <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg" alt="" width="50px" height="50px" />
            <h2>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>Sanan Mardanli</td>
                  </tr>
                  <tr>
                    <td>Mail:</td>
                    <td>username@ada.edu.az</td>
                  </tr>
                </tbody>
              </table>
            </h2>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quisquam cum ullam provident atque voluptas, dolorem voluptates obcaecati iste explicabo rerum recusandae harum deleniti veniam doloribus. Alias ea dolore doloremque.</p>
          <br />
          <div className="buttons">
            <button className="links">GitHub
              <i className="fa fa-brands fa-github" style={{fontSize: '24px', color: 'red'}} />
            </button>
            <button className="links">YouTube
              <i className="fab fa-youtube" style={{fontSize: '24px', color: 'red'}} />
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg" alt="" width="50px" height="50px" />
            <h2>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>Turgay Ferhadli</td>
                  </tr>
                  <tr>
                    <td>Mail:</td>
                    <td>tferhadli14021@ada.edu.az</td>
                  </tr>
                </tbody>
              </table>
            </h2>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quisquam cum ullam provident atque voluptas, dolorem voluptates obcaecati iste explicabo rerum recusandae harum deleniti veniam doloribus. Alias ea dolore doloremque.</p>
          <br />
          <div className="buttons">
            <button className="links">GitHub
              <i className="fa fa-brands fa-github" style={{fontSize: '24px', color: 'red'}} />
            </button>
            <button className="links">YouTube
              <i className="fab fa-youtube" style={{fontSize: '24px', color: 'red'}} />
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg" alt="" width="50px" height="50px" />
            <h2>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>Atilla Sharifli</td>
                  </tr>
                  <tr>
                    <td>Mail:</td>
                    <td>asherifli13561@ada.edu.az</td>
                  </tr>
                </tbody>
              </table>
            </h2>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quisquam cum ullam provident atque voluptas, dolorem voluptates obcaecati iste explicabo rerum recusandae harum deleniti veniam doloribus. Alias ea dolore doloremque.</p>
          <br />
          <div className="buttons">
            <button className="links">GitHub
              <i className="fa fa-brands fa-github" style={{fontSize: '24px', color: 'red'}} />
            </button>
            <button className="links">YouTube
              <i className="fab fa-youtube" style={{fontSize: '24px', color: 'red'}} />
            </button>
          </div>
        </div>
      </div>
    </div>
      <p>Copyright &#169; {new Date().getFullYear()}</p>;
    </div>
  );
}

export default Home;
