// 1 - Criar um vetor de valores inteiros
// 2 - Percorrer o vetor com um laço
// 3 - Gerar um valor aleatorio em C#
// 4 - Ordenar o vetor usando o Bubble Sort

int tamanho = 10;
int[] valores = new int[tamanho];

Random random = new Random();

for (int i = 0; i < valores.Length; i++)
{
    valores[i] = random.Next(10);
    Console.Write(valores[i] + " | ");
}

bool troca = false;

do
{

    troca = false;
    for (int i = 0; i < valores.Length - 1; i++)
    {
        if (valores[i] > valores[i + 1])
        {
            troca = true;
            int aux = valores[i];
            valores[i] = valores[i + 1];
            valores[i + 1] = aux;
        }
    }

} while (troca == true);

Console.WriteLine("\n");

for (int i = 0; i < valores.Length; i++)
{
    Console.Write(valores[i] + " | ");
}