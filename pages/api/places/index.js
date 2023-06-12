import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const places = await Place.find();
      return response.status(200).json(places);
    case "POST":
      const placeData = request.body;
      console.log("placeData: ", request.body);
      const place = new Place(placeData);
      await place.save();
      return response.status(201).json({ status: "Place created" });
  }
}
