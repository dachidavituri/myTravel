interface InfoRowProps {
  label: string;
  value?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="flex items-center justify-between gap-5">
    <p className="text-sm font-bold text-gray-500">{label}</p>
    <span className="text-sm text-gray-700">{value || "-"}</span>
  </div>
);
export default InfoRow;
