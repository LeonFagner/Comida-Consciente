import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

interface FoodCardProps{
  title: string;
  type: string;
  quantity: string;
  expirationDate: string;
  location: string;
  distance?: string;
  image?: string;
  urgent?: boolean;
  onSchedule?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  title,
  type,
  quantity,
  expirationDate,
  location,
  distance,
  image,
  urgent = false,
  onSchedule
}) => {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="h-40 overflow-hidden bg-cc-green-100">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-cc-green-100 text-cc-green-500">
            <span className="text-4xl">🥦</span>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium">{title}</h3>
          {urgent && <Badge className="bg-cc-orange-500">Urgente</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{type}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm gap-2">
          <Calendar className="h-4 w-4 text-cc-orange-500" />
          <span>Validade: {expirationDate}</span>
        </div>
        <div className="flex items-center text-sm gap-2">
          <MapPin className="h-4 w-4 text-cc-blue-500" />
          <span>{location} {distance && `(${distance})`}</span>
        </div>
        <div className="flex items-center text-sm gap-2">
          <span className="font-medium">Quantidade:</span>
          <span>{quantity}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onSchedule} 
          className="w-full bg-cc-green-600 hover:bg-cc-green-700"
        >
          Agendar Retirada
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;