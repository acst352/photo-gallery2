"use client";
import React, { useState, useEffect } from "react";
import { getPhotos } from '../../services/photo/getPhotos';

export const Photos = () => {
  // const getPhotos = async() => {
  //   try {
  //     const photos = await getPhotos()
  //     setPhotos(photos)
      
  //   }
  // }
  return (
    <>
      <div className="photos px-8 w-full p-8">
        Photos
        <div className="w-full h-screen"></div>
      </div>
    </>
  );
};
