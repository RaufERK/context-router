import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Contacts = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/'), 3000);
  }, []);
  return (
    <div>
      <h1>Contacts</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ipsum
        vel maiores quae magnam, nihil rem consequuntur adipisci quaerat
        repellendus perferendis tempora, non cum dignissimos. Dolore impedit rem
        numquam aliquam rerum, perspiciatis doloribus velit quas. Enim officia,
        incidunt soluta fugiat inventore, deleniti nisi cum iste quia minima
        praesentium. Officia illum rerum, similique dignissimos vel ipsam? Modi
        aut voluptatibus aspernatur excepturi illo aliquid autem saepe debitis
        soluta nesciunt beatae et, doloremque eveniet adipisci ut ad voluptatem
      </p>
      <button onClick={() => history.push('/')}>HOME</button>
      <button onClick={() => history.push('/about')}>ABOUT</button>
      <button onClick={() => history.push('/production')}>PRODUCTION</button>
    </div>
  );
};

export default Contacts;
