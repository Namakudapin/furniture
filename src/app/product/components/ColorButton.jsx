export const ColorButton = ({ color, selected }) => (
    <button
      className={`w-6 h-6 rounded ${selected ? 'ring-2 ring-offset-2 ring-black' : ''}`}
      style={{ backgroundColor: color }}
    />
  );