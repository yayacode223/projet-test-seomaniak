import { registerUser, loginUser } from "../model/user.js";

export const registerUsers = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Données reçues :", { name, email, password });
  
  try {
    const user = await registerUser(name, email, password);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ messge: error.message });
  }
};

export const loginUsers = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { user, accessToken} = await loginUser(email, password);

    // Stocker le refresh token dans le cookie securise qui sera automatiquement envoye
    //  par le navigateur au sereur(Backend)

    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   secure: false, // true en mode production
    //   sameSite: "Strict",
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7jours
    // });

    return res.status(200).json({ user, accessToken: accessToken }); // Frontend utilisera accesToken
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
