import React from 'react'
import { DateTime } from 'luxon'
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CommitDetails = ({ commitsDetails, handleToogleDetails }) => (
  <div className='bg-transparent-dark absolute top-0 left-0 z-10 w-[100vw] h-[100vh]'>
      <div className='bg-primary-gray absolute text-[1rem] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-[70%] md:w-[80%] lg:w-[30%] h-[40%] py-2 px-2 flex items-center text-primary-orange'>
          <span className='text-primary-orange font-bold absolute top-[10px] right-[30px] text-[1.5rem] cursor-pointer transition-all hover:scale-110 z-[10]'
                onClick={handleToogleDetails}>X</span><br/>
          <Carousel className="rounded-xl" prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-0 -translate-y-2/4 text-primary-orange text-[1.5rem]"
            >
              <FaAngleLeft />
            </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-0 -translate-y-2/4 text-primary-orange text-[1.5rem]"
              >
                <FaAngleRight />
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-primary-orange" : "w-4 bg-primary-orange/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}>
              {commitsDetails.map(commit => (
                <div key={crypto.randomUUID()} className='absolute top-[50%] translate-y-[-50%] ms-10'>
                  <p>Author: {commit.name}</p>
                  <p>E-mail: {commit.email}</p>
                  <p>Date: {commit.date.toFormat('dd-MM-yyyy HH:mm')}</p>
                  <p>Message: {commit.message}</p>
                </div>
              ))}
          </Carousel>
      </div>
  </div>
)

export default CommitDetails