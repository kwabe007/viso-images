interface SpecTableProps {
  specs: [string, string][];
}

export const SpecTable = ({ specs }: SpecTableProps) => {
  return (
    <table className="text-3xl">
      <tbody>
        {specs.map(([name, value]) => (
          <tr key={name} className="border-b border-white/20">
            <td className="font-bold py-6">{name}</td>
            <td className="pl-12">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
