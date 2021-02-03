import React, { useState } from 'react';
import './GifsList.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgb(18, 18, 18)',
    color: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '20px',
    outline: 'none',
  },
}));

const GifsList = ({ gifs }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [isLoading, setLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const selectGif = (gif) => {
    setOpen(true);
    setSelected(gif);
    setLoading(false);
  };

  return (
    <div className="gifs-container">
      {gifs.map((gif) => {
        return (
          <div className="gifs-container__image" key={gif.id}>
            <img
              className="img"
              src={gif.images.downsized_medium.url}
              alt={gif.title}
              onClick={() => selectGif(gif)}
            />
          </div>
        );
      })}

      {isLoading ? (
        <div className="gifs-container__welcome">
          <div style={{ color: 'white', padding: '20px' }}>
            Welcome to Giphy finder page
          </div>
          <img
            src="https://media.giphy.com/media/2sgDam8j8wQaMRzmIk/giphy.gif"
            all="excited gog"
          />
        </div>
      ) : (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div onClick={handleClose} className="transition-modal-closeBtn">
                Close
              </div>
              <img
                src={selected.images.downsized_medium.url}
                alt={selected.title}
                className="transition-modal-image"
              />
              <p id="transition-modal-description">{selected.title}</p>
              <p id="transition-modal-description">
                Date created: {selected.import_datetime}
              </p>
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
};

export default GifsList;
