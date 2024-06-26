import React, { useState, useEffect } from 'react';

const API_KEY = '35w1AtgZJg6KgUDpi3Jsk4vLdYkOUkcwaNrfEctk';
const API_BASE_URL = 'https://api.nasa.gov';

const App = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [scientificData, setScientificData] = useState([]);
  const [missions, setMissions] = useState([]);
  const [astronomicalData, setAstronomicalData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/some/image/endpoint?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/some/video/endpoint?api_key=${API_KEY}`);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    const fetchScientificData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/some/scientific/endpoint?api_key=${API_KEY}`);
        const data = await response.json();
        setScientificData(data);
      } catch (error) {
        console.error('Error fetching scientific data:', error);
      }
    };

    const fetchMissions = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/some/missions/endpoint?api_key=${API_KEY}`);
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    };

    const fetchAstronomicalData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/some/astronomical/endpoint?api_key=${API_KEY}`);
        const data = await response.json();
        setAstronomicalData(data);
      } catch (error) {
        console.error('Error fetching astronomical data:', error);
      }
    };    

    fetchImages();
    fetchVideos();
    fetchScientificData();
    fetchMissions();
    fetchAstronomicalData();
  }, []);

  return (
    <div>
      <h1>Explorador Espacial</h1>
      <div>
        <h2>Imágenes</h2>
        <ul>
          {images.map((image, index) => (
            <li key={index}><img src={image.url} alt={image.title} /></li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Videos</h2>
        <ul>
          {videos.map((video, index) => (
            <li key={index}><iframe title={video.title} width="560" height="315" src={video.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Datos Científicos</h2>
        <ul>
          {scientificData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Misiones Espaciales</h2>
        <ul>
          {missions.map((mission, index) => (
            <li key={index}>{mission.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Datos Astronómicos</h2>
        <ul>
          {astronomicalData.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
