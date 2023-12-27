import { Request, Response } from 'express';
import { channelService } from '../services/channe.servicel';

export const ChannelController = {
    async addChannel(req:Request,res:Response){
        const { name } = req.body;
        try {
            const channel = await channelService.addChannel(name);
            res.status(200).json({
                status: 'success',
                data: channel,
                message: 'channel added successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },


    async getAllChannels(req: Request, res: Response) {
        try {
            const channels = await channelService.getAllChannels();
            res.status(200).json({
                status: 'success',
                data: channels,
                message: 'channels retrieved successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },

    
    };


