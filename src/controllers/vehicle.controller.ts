import { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/vehicle.model";

export default class ProductController {
  public static async Create(req: Request, res: Response) {
    let {
        make,
        model,
        year,
        color,
        fuel,
        steering,
        type,
        image,
        milage,
        price,
        stock,
        owner,
        engene,
        perfomance,
        environment ,
        deimension ,
        safety ,
        feature ,
        technology ,
    } = req.body;
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        make,
        model,
        year,
        color,
        fuel,
        steering,
        type,
        image,
        milage,
        price,
        stock,
        owner,
        engene,
        perfomance,
        environment ,
        deimension ,
        safety ,
        feature ,
        technology ,
    });

    try {
      await product.save();
      return res.status(201).json(product);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async Getall(req: Request, res: Response) {
    try {
      const product = await Product.find().exec();
      if (!product) {
        return res.status(404).json({ massege: "unknown product" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async Get(req: Request, res: Response) {
    try {
      const product = await Product.findById(req.params.Id).exec();
      if (!product) {
        return res.status(404).json({ massege: "unknown product" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async Find(req: Request, res: Response) {
    try {
      const product = await Product.findOne({
        barcode: req.params.barcode,
      }).exec();
      if (!product) {
        return res.status(404).json({ massege: "unknown product" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async Remove(req: Request, res: Response) {
    try {
      const product = await Product.remove({
        _id: req.params.productId,
      }).exec();
      if (!product) {
        return res.status(404).json({ massege: "unknown product" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async Update(req: Request, res: Response) {
    let {
        make,
        model,
        year,
        color,
        fuel,
        steering,
        type,
        image,
        milage,
        price,
        stock,
        engene,
        perfomance,
        environment ,
        deimension ,
        safety ,
        feature ,
        technology ,
    } = req.body;

    try {
      const product = await Product.updateOne(
        { _id: req.params.productId },
        {
          $set: {
            make,
            model,
            year,
            color,
            fuel,
            steering,
            type,
            image,
            milage,
            price,
            stock,
            engene,
            perfomance,
            environment ,
            deimension ,
            safety ,
            feature ,
            technology ,
          },
        }
      ).exec();

      if (!product) {
        return res.status(404).json({ massege: "unknown product" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
