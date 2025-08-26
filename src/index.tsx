import React from "react";

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ label, color = "#4CAF50", ...props }) => {
  const styles: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: color,
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    boxShadow: `0 0 10px ${color}`,
    transition: "all 0.3s ease-in-out",
  };

  return (
    <button
      style={styles}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 10px ${color}`;
      }}
      {...props}
    >
      {label}
    </button>
  );
};

export default GlowButton;
