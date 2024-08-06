import React, { useState } from 'react';
import { FaMusic, FaMicrophone, FaPodcast, FaFileAudio, FaCaretDown, FaSpinner, FaWaveSquare, FaPlay, FaVolumeUp } from 'react-icons/fa';
import Navbar from './Navbar'; 


import Image from 'next/image';
import audioIcon from '@/public/icons/audio.svg';

import musicIcon from '@/public/icons/music.svg';
import pdfIcon from '@/public/icons/pdfIcon.svg';
import shareIcon from '@/public/icons/share.svg'
import thumbnail from '@/public/icons/videothumbnail.svg';
import { LoaderCircle, XCircle, Dot, ChevronDown, Clipboard, Copy, Share } from 'lucide-react';



const AudioSummarizer: React.FC = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('audioSummarizer');

  // State for file upload and progress
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // Function to handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Function to simulate upload
  const handleUpload = () => {
    if (!file) return;
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsComplete(true);
        setIsUploading(false);
      }
    }, 500);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-bold text-gray-800">Transform your Audio into Text With Ease</h1>

        <div className="w-full max-w-4xl mt-8 bg-white shadow-md rounded-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
              <div className={`cursor-pointer flex items-center ${activeTab === 'audioSummarizer' ? 'text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('audioSummarizer')}>
                <FaMicrophone className="mr-2" />
                <span>Audio Summarizer</span>
              </div>

              <div className={`cursor-pointer flex items-center ${activeTab === 'podcast' ? 'text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('podcast')}>
                <FaPodcast className="mr-2" />
                <span>Podcast</span>
              </div>

              <div className={`cursor-pointer flex items-center ${activeTab === 'audioFiles' ? 'text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('audioFiles')}>
                <FaFileAudio className="mr-2" />
                <span>Audio Files</span>
              </div>

              <div className={`cursor-pointer flex items-center ${activeTab === 'music' ? 'text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('music')}>
                <FaMusic className="mr-2" />
                <span>Music</span>
              </div>

              <div className="cursor-pointer flex items-center text-gray-600">
                <FaCaretDown className="mr-2" />
                <span>More</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'audioSummarizer' && (
              <>
                <h2 className="text-xl font-semibold text-gray-700">Audio Summarizer</h2>
                <p className="text-gray-500 mt-1">Upload, generate, and define</p>

                {!isComplete ? (
                  <div className="mt-6">
                    {!isUploading ? (
                      <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                        <FaMusic className="text-3xl text-gray-400" />
                        <p className="mt-4 text-gray-600">Upload Audio</p>
                        <p className="text-gray-400">Click to browse or drag and drop file here</p>
                        <input type="file" accept="audio/*" onChange={handleFileChange} className="mt-4 cursor-pointer" />
                      </div>
                    ) : (
                      <div className="flex items-center mt-6">
                        <FaSpinner className="animate-spin text-3xl text-blue-500" />
                        <p className="ml-4 text-gray-600">{file?.name} - {uploadProgress}kb of {file?.size}kb</p>
                        <button onClick={() => { setIsUploading(false); setUploadProgress(0); }} className="ml-4 text-red-500 hover:text-red-700">
                          &times; Cancel
                        </button>
                      </div>
                    )}

                    <button onClick={handleUpload} disabled={!file} className={`mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none ${!file ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      {isUploading ? 'Loading...' : 'Proceed'}
                      {isUploading && <FaSpinner className="ml-2 animate-spin inline-block" />}
                    </button>
                  </div>
                ) : (
                  <div className="mt-6">
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                      <p className="text-gray-600">{file?.name} - {file?.size}kb</p>
                    </div>

                    <button className="mt-4 px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none">
                      Summarize
                    </button>

                    <div className="mt-4 flex items-center justify-between">
                      <FaPlay className="text-blue-500 cursor-pointer" />
                      <FaWaveSquare className="text-gray-500" />
                      <div className="text-gray-600">0:00 / 3:00</div>
                      <FaVolumeUp className="text-gray-500 cursor-pointer" />
                    </div>

                    <div className="mt-4 text-gray-600">
                      Author: Your Name
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioSummarizer;
