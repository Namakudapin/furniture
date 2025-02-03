const ColorSelection = ({ colors }) => (
    <div>
      <h3 className="text-black font-medium mb-2">Color: Royal Brown</h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`w-8 h-8 rounded ${color.code} border border-gray-200`}
          />
        ))}
      </div>
    </div>
  );
  
  export default ColorSelection;
  