import './style.css'
import {setTimeout} from "./settings.ts";
import { setupCounter } from './counter.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NFT-Assets</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <div class="contentSing-in">
        <div class="label">
            <img src="../assets/Frame.png" alt="error">
            <p>PNFT Market</p>
        </div>
        <div class="nftAccess">
            <div class="infoContent">
                <h1>NFT Access</h1>
                <p>Please fill your detail to access your account.</p>
            </div>
            <form id="loginForm" method="get">
                <table>
                    <tr>
                        <th><label for="email">Email</label></th>
                        <th><input type="email" name="email" id="email" placeholder="debra.holt@example.com"></th>
                    </tr>
                    <tr class="secondLineTable">
                        <th><label for="password">Password</label></th>
                        <th><input type="password" name="password" id="password" ></th>
                    </tr>
                    <tr class="checkBoxLine">
                        <th class="rememberMe">
                            <input type="checkbox" name="checkBox" id="checkbox">
                            <label for="checkbox">Remember me</label>
                        </th>
                        <th><a href="#">Forgot Password?</a></th>
                    </tr>
                    <tr class="btn">
                        <th>
                            <button  type="submit" id="signSubmit">Sign in</button>
                        </th>
                    </tr>
                    <tr class="btnGoogles">
                        <th class="size-forBtnGoogle">
                            <button id='btnGoogles' class="btnGoogle" type="submit">
                                <img src="../assets/Google.png" alt="">
                                Sign in with Google
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th class="newAccount">
                            <p>Don’t have an account? <a href="#" style="color: #5429FF">Sign up</a></p>
                        </th>
                    </tr>
                </table>
            </form>
        </div>
        <div class="footer">
            @CreatedbyNAMDesign
        </div>
    </div>
    <div class="image">
        <img src="../assets/DRIP_20.png" alt="error">
    </div>
</main>
</body>
</html>
`
setTimeout()

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
