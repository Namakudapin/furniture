import { ColorButton } from "../ColorButton";

export const ColorFilter = () => (
    <div>
      <h3 className="font-medium mb-2 text-black">Color</h3>
      <div className="flex flex-wrap gap-2">
        <ColorButton color="red" selected />
        <ColorButton color="#50C878" />
        <ColorButton color="#FF69B4" />
        <ColorButton color="#4169E1" />
        <ColorButton color="#FFD700" />
        <ColorButton color="#FF00FF" />
      </div>
    </div>
  );