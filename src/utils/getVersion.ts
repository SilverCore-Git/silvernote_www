export async function getVersionFromGitHub
(repo: string, branch: string = "main"): Promise<string | undefined>
{
    const url = `https://raw.githubusercontent.com/${repo}/${branch}/package.json`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Erreur HTTP ${res.status}`);
        }

        const pkg = await res.json();
        return pkg.version;
    } catch (err) {
        console.error("Impossible de récupérer la version :", err);
        return undefined;
    }
}


export default getVersionFromGitHub("SilverCore-Git/silvernote_app", "main");