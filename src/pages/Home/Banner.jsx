import React from 'react';
import { motion } from "motion/react";
import team1Img from '../../assets/team/team1.jpg'
import team2Img from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team1Img}
                        className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 2, repeat: Infinity }}
                        src={team2Img}
                        className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 2 }
                        }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{
                                color: ["#8a33ff", "#33ff33"],
                                transition: { duration: 3, repeat: Infinity }
                            }}>Jobs
                        </motion.span> For You!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;