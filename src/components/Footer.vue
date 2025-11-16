<template>

    <footer class="w-full bg-white/25 backdrop-blur-md rounded-3xl border border-orange-400 p-6 max-w-full">
        
        <div class="flex flex-col md:flex-row justify-between gap-6">
            
            <div class="flex flex-col gap-2">


                <a href="./" class="flex items-center gap-2">
                    <img 
                        src="https://framerusercontent.com/images/2SRLHWdbr3KT4Ra4QNbfMIaMuqc.svg"
                        alt="Silvernote Logo"
                        class="w-6 h-6 object-cover rounded-full"
                    />
                    <span class="text-lg font-semibold text-gray-900">Silvernote</span>
                </a>
                <p class="text-sm text-gray-700 max-w-xs">
                    SilverNote est l'application de prise de notes simple et intuitive conçue pour vous, disponible sur mobile, PC et en tant qu'application web.
                </p>

            </div>

            
            <div class="flex gap-4 items-center">
                <a href="./404" target="_blank" class="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-5 h-5 text-white"><use href="#942143898"></use></svg>
                </a>
                <a href="./404" target="_blank" class="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-5 h-5 text-white"><use href="#3761207643"></use></svg>
                </a>
            </div>

            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-900">

                <div>
                    <h4 class="font-semibold mb-2">Nous sommes aussi</h4>
                    <ul class="flex flex-col gap-1">
                        <li><a href="https://www.silvercore.fr/" target="_blank" rel="noopener" class="hover:underline">Silvercore</a></li>
                        <li><a href="https://www.silvertransfert.fr/?form=main" target="_blank" rel="noopener" class="hover:underline">Silvertransfert</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold mb-2">Contact</h4>
                    <ul class="flex flex-col gap-1">
                        <li>Discord silvercore</li>
                        <li>Discord support</li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold mb-2">Information</h4>
                    <ul class="flex flex-col gap-1">
                        <li>Confidentialité</li>
                        <li><a href="./terms-of-use" class="hover:underline">Mentions legales</a></li>
                        <li>CGU</li>
                    </ul>
                </div>

                <div>

                    <h4 class="font-semibold mb-2">Pages</h4>

                    <ul class="flex flex-col gap-1">
                        <li>Accueil</li>
                        <li>Fonctionalités</li>
                        <li><a href="./?mode=light&amp;siteId=f834c5c50df18ff4d8005234ebd3e2d8fb0ed747daef733ce3e3b15c97b6ef2c&amp;experiment=prototypeTreeDriver%3DdynamicOverrides#pricing" class="hover:underline">Pricing</a></li>
                        <li><a href="./blog" class="hover:underline">Blog</a></li>
                    </ul>

                </div>
                
            </div>

        </div>

        <div class="mt-6 border-t border-gray-300 pt-4 text-sm text-gray-700 text-center">
            &copy; 2025 SilverNote. Tous droits réservés.
        </div>

    </footer>

</template>
