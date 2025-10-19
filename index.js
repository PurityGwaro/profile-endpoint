import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3004;

app.get("/me", async (req, res) => {
  try {
    const catResponse = await fetch("https://catfact.ninja/fact", { timeout: 5000 });

    const catData = await catResponse.json();
    const catFact = catData.fact || "Cats are mysterious creatures";

    const response = {
      status: "success",
      user: {
        email: "puritygwaro99@example.com",
        name: "Purity Gwaro",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
